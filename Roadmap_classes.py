from typing import Optional, List

# Này class subject tượng trưng thôi sau sẽ thay bằng class subject cụ thể
class subject:
    CourseCode: str
    VietnameseName: str
    TheoryCredits: int
    PracticeCredits: int

class semester:
    subjects: List[subject]

class table_roadmap:
    semester1: semester
    semester2: semester
    semester3: semester
    semester4: semester
    semester5: semester
    semester6: semester
    semester7: semester
    semester8: Optional[semester] = None
    semester9: Optional[semester] = None
    semester10: Optional[semester] = None
    semester11: Optional[semester] = None
    semester12: Optional[semester] = None

