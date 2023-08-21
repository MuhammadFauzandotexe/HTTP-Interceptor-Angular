export interface AuthResponse{
  massage:string,
  data:UserResponse
}

interface UserResponse{
  username:string,
  roles:string[],
  token:string
}
