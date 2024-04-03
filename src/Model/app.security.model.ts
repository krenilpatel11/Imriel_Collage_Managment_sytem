export class AppUser{
  constructor(
    public Email:string,
    public Password: string,
    public ConfirmPassword:string,
    public Role:string

  ){}
}

export class LoginUser{
  constructor(
    public Email:string,
    public Password: string
  ){}
 }
// export class RoleInfo{
//   constructor(
//     public Name:string
//   ){}
// }
// export class UserRole{
//   constructor(
//     public Email:string,
//     public RoleName:string
//   ){}
// }

export class SecurityResponse{
  constructor(
    public Message:string,
    public Token:string,
    public IsLoggedIn:boolean,
    public Role: string,
   // public userRole : string

  ){}

}

