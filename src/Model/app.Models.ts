import internal from "stream";

export class collageModel
{
  [key: string]: any;
  constructor(
    public collegeUniqueId: number,
    public CollegeId: number,
    public Name: string,
    public Location:string,
    public Description: string,
   // public Courses : CourseModel[],
){}
}
export class CourseModel
{
  [key: string]: any;

  constructor(
    public courseUniqueId: number,
    public CourseId: number,
    public CourseName: string,
    public CourseFees:number,
    public CourseDuration:number,
    public eligibilityCriteria:string,
    public collageUniqueId:number,
    public collage: collageModel[]
){}
}

export class StudentModel{
  [key: string]: any;

  constructor(
    public AdmissionId : number,
    public StudentId:number,
    public FirstName:string,
    public LastName:string,
    public Email:string,
    public PhoneNumber:number,
    public Address:string,
    public Gender:string,
    public CollageUniqueId:number,
    public AdmissionDate:Date,
    public collage: collageModel[],
    public StudentCourses: StudentCourses[]
    ){}
  }

  export class StudentCourses{
    [key: string]: any;

    constructor(
      public AdmissionId:number,
      public Student:StudentModel,
      public CourseUniqueId:number,
      public Course:CourseModel,
    ){}
  }

// export class AdmissionRecordModel{
//   constructor(
//     public AdmissionRecordId:number,
//     public StudentId:number,
//     public CollageId:number,
//     public CourseId:number,
//     public AdmissionDate:Date,
//     public Status:string
//   ){}
// }

export class AttendenceModel{
  [key: string]: any;

  constructor(
    public StudentId:number,
    public AttendenceDate:Date,
    public AttendenceStatus:string
  ){}
}

export class ExamReportModel{
  [key: string]: any;

  constructor(
    public StudentId:number,
    public courses:CourseModel,
    public ExamDate:Date,
    public CGPA: number

  ){}
}


//class for receving Http Response after the Api Call
export class APIResponse<T>{
  constructor(
    public Message:string,
    public StatusCode: number,
    public Records: Array<T>,
    public Record: T
  ){}

  // public getRecordsAsArray(): Array<T> {
  //   return Object.keys(this.Records).map(key => this.Records[key]);
  // }
}
