from typing import Optional, List

# Này class subject tượng trưng thôi sau sẽ thay bằng class subject cụ thể
class subject:
    CourseCode: str
    VietnameseName: str
    TheoryCredits: int
    PracticeCredits: int

class semester:
    subjects_list: List[subject]

class table_roadmap:
    semester1: List[semester]
    semester2: List[semester]
    semester3: List[semester]
    semester4: List[semester]
    semester5: List[semester]
    semester6: List[semester]
    semester7: List[semester]
    semester8: Optional[List[semester]] = None
    semester9: Optional[List[semester]] = None
    semester10: Optional[List[semester]] = None
    semester11: Optional[List[semester]] = None
    semester12: Optional[List[semester]] = None

