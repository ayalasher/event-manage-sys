import bcrypt from 'bcrypt'


const saltrounds = 10

const hashpassword = (password)=>{
  const salt =   bcrypt.genSaltSync(saltrounds)
  return bcrypt.hashSync(password,salt)
}
 
export const comparepassword = (plain,hashed)=>{
    return bcrypt.compareSync(plain,hashed) ;
}

export default hashpassword ; 
