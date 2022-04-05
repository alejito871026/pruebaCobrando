import usuarios from '/models/usuarios'


const Frank_blog = await usuarios.find({nombre_Usuario:'Frank_blog'})
const Peter = await usuarios.find({nombre:'Peter'})
const NumeroUsuarios = await usuarios.find({'direccion.CP':'39005'}).countDocuments()
const UsuarioTelefono = await usuarios.find({telefonos:'111111111'})
const usuarioTwiter = await usuarios.find({'direccion.CP':{$gte:'39005'}},{nombre_Usuario:1,cuentaTwiter:1,_id:0})
