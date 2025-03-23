import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import { MenuItem, FormControl, Select, Typography, InputLabel } from "@material-ui/core";
import { Record } from "PersonalKanban/types";
import { RecordColor } from "PersonalKanban/enums";
import Radio from "PersonalKanban/components/Radio";
import { useTranslation } from "PersonalKanban/providers/TranslationProvider";
import { fetchSubjects } from "../../appwriteConfig";
import Autocomplete from "@mui/material/Autocomplete";

type RecordFormProps = {
  record?: Record;
  onSubmit: any;
  onCancel?: any;
  disabled?: boolean;
  formTitle?: string;
};

const RecordForm: React.FC<RecordFormProps> = (props) => {
  const { t } = useTranslation();
  const { record, disabled, formTitle = t("addRecord"), onSubmit, onCancel } = props;

  const [subjects, setSubjects] = useState<{ code: string; name: string }[]>([]);
  
  useEffect(() => {
    fetchSubjects()
      .then((data) => {
        console.log("Dữ liệu từ Appwrite:", data);
        const formattedData = data.map((item: any) => ({
          code: item.code,
          name: item.name,
        }));
        setSubjects(formattedData);
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: Object.assign(
      {
        title: "",
        dropdownOptionSubject: "",
        description: "",
        color: "",
      },
      record
    ),
    onSubmit: (values) => {
      onSubmit && onSubmit(values);
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.title) {
        errors.title = t("titleRequired");
      }
      return errors;
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6">
            {formTitle}
          </Typography>
          <Divider />
        </Grid>

        {/* Tiêu đề */}
        <Grid item xs={12}>
          <TextField
            name="title"
            label={t("title")}
            value={values.title}
            error={Boolean(errors.title)}
            helperText={errors.title}
            disabled={disabled}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        {/* Dropdown chọn Subject */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="dropdown-subject-label">{t("Select subject")}</InputLabel>
            <Select
              labelId="dropdown-subject-label"
              name="dropdownOptionSubject"
              value={values.dropdownOptionSubject || ""}
              onChange={(e) => {
                const selectedCode = e.target.value;
                const selectedSubject = subjects.find((subject) => subject.code === selectedCode);

                setFieldValue("dropdownOptionSubject", selectedCode);
                if (selectedSubject) {
                  setFieldValue("title", selectedSubject.name); 
                }
              }}
            >
            {subjects.map((subject) => (
            <MenuItem key={subject.code} value={subject.code}>
              {subject.name}
            </MenuItem>
            ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Mô tả */}
        <Grid item xs={12}>
          <TextField
            multiline
            rows={3}
            name="description"
            label={t("description")}
            value={values.description}
            error={Boolean(errors.description)}
            helperText={errors.description}
            disabled={disabled}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        {/* Màu background */}
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">{t("background")}</FormLabel>
            <RadioGroup
              row
              aria-label="background"
              name="color"
              value={values.color}
              onChange={handleChange}
            >
              {Object.keys(RecordColor).map((key) => {
                const colorKey = key as keyof typeof RecordColor;
                return (
                  <Radio
                    key={colorKey}
                    value={colorKey}
                    color={RecordColor[colorKey]}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Nút Cancel và Submit */}
        <Grid item xs={12}>
          <Button variant="outlined" disabled={disabled} onClick={onCancel}>
            {t("cancel")}
          </Button>
          &nbsp;
          <Button type="submit" color="primary" variant="contained" disabled={disabled}>
            {t("submit")}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RecordForm;
