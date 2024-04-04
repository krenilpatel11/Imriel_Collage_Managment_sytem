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
    public collegeUniqueId:number,
    public courseFees:string,
    public CourseDuration:string,
    public ElegblityCriteria:string,
   // public College: collageModel[]
){}
}

export class StudentModel{
  [key: string]: any;

  constructor(
    public AdmissionId : number,
    public FirstName:string,
    public LastName:string,
    public PhoneNumber:string,
    public Email:string,
    public Gender:string,
    public Address:string,
    public collegeUniqueId:number,
    public Status:number,
    //public collage: collageModel[],
    public Courses: CourseModel[]
    ){}
  }

  // export class StudentCourses{
  //   [key: string]: any;

  //   constructor(
  //     public AdmissionId:number,
  //     public Student:StudentModel,
  //     public CourseUniqueId:number,
  //     public Course:CourseModel,
  //   ){}
  // }

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

// export class AttendenceModel{
//   [key: string]: any;

//   constructor(
//     public StudentId:number,
//     public AttendenceDate:Date,
//     public AttendenceStatus:string
//   ){}
// }

export class StudentReportModel{
  [key: string]: any;

  constructor(
    public studentReportId:number,
    public AdmissionId:number,
    public Attendance:string,
    public Grade:string,
    public FullName:string,

    //public course:CourseModel,

    //public student: StudentModel

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
