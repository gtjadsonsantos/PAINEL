function Time() {
    const ObjDate = new Date()
    const getday = ObjDate.getDate  ()
    const getmonth = ObjDate.getMonth()
    const gethours = ObjDate.getHours()
    const getminutes = ObjDate.getMinutes()
    const getseconds = ObjDate.getSeconds()
    const getfullyear = ObjDate.getFullYear()

    const Month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setebro", "Outubro", "Novembro","Dezembro"]

    return { getday, month:  Month[getmonth], getfullyear, gethours, getminutes, getseconds }
}


export default Time