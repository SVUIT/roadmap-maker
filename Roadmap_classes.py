from typing import Optional, List
import json

class Subject:
    CourseCode: str
    VietnameseName: str
    TheoryCredits: int
    PracticeCredits: int
    Comments: Optional[str] = None
    def __init__(
        self,
        CourseCode: str,
        VietnameseName: str,
        TheoryCredits: int, 
        PracticeCredits: int,
        Comments: Optional[str] = None
    ):
        self.CourseCode = CourseCode
        self.VietnameseName = VietnameseName
        self.TheoryCredits = TheoryCredits
        self.PracticeCredits = PracticeCredits
        self.Comments = Comments

class Semester:
    subjects: List[Subject]
    def __init__(self, subjects: List[Subject]):
        self.subjects = subjects

class Table_Roadmap:
    semester1: Semester
    semester2: Semester
    semester3: Semester
    semester4: Semester
    semester5: Semester
    semester6: Semester
    semester7: Semester
    semester8: Optional[Semester] = None
    semester9: Optional[Semester] = None
    semester10: Optional[Semester] = None
    semester11: Optional[Semester] = None
    semester12: Optional[Semester] = None
    def __init__(
        self,
        semester1: Semester,
        semester2: Semester,
        semester3: Semester,
        semester4: Semester,
        semester5: Semester,
        semester6: Semester,
        semester7: Semester,
        semester8: Optional[Semester] = None,
        semester9: Optional[Semester] = None,
        semester10: Optional[Semester] = None,
        semester11: Optional[Semester] = None,
        semester12: Optional[Semester] = None,
    ):
        self.semester1 = semester1
        self.semester2 = semester2
        self.semester3 = semester3
        self.semester4 = semester4
        self.semester5 = semester5
        self.semester6 = semester6
        self.semester7 = semester7
        self.semester8 = semester8
        self.semester9 = semester9
        self.semester10 = semester10
        self.semester11 = semester11
        self.semester12 = semester12

# A helper function to load semester data from JSON
def load_semester_data(semester_data: dict) -> Semester:
    subjects = [
        Subject(
            CourseCode=subject["CourseCode"],
            VietnameseName=subject["VietnameseName"],
            TheoryCredits=subject["TheoryCredits"],
            PracticeCredits=subject["PracticeCredits"],
            Comments=subject["Comments"] if "Comments" in subject else None
        )
        for subject in semester_data["subjects"]
    ]
    return Semester(subjects=subjects)

# Load the JSON data
path = r"<path-to-json-file>"
with open(path, encoding = 'utf-8') as json_file:
    data = json.load(json_file)

# Map the JSON data to a Table_Roadmap object
table = Table_Roadmap(
    semester1=load_semester_data(data["semester1"]),
    semester2=load_semester_data(data["semester2"]),
    semester3=load_semester_data(data["semester3"]),
    semester4=load_semester_data(data["semester4"]),
    semester5=load_semester_data(data["semester5"]),
    semester6=load_semester_data(data["semester6"]),
    semester7=load_semester_data(data["semester7"]),
    semester8=load_semester_data(data["semester8"]) if "semester8" in data else None,
    semester9=load_semester_data(data["semester9"]) if "semester9" in data else None,
    semester10=load_semester_data(data["semester10"]) if "semester10" in data else None,
    semester11=load_semester_data(data["semester11"]) if "semester11" in data else None,
    semester12=load_semester_data(data["semester12"]) if "semester12" in data else None,
)

# Do whatever you want with the table object
# Example:
#   Code: print(table.semester1.subjects[0].CourseCode)
#   Output: 'IT001'