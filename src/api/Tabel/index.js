import { getApiNoAuth } from '../utils'

export default{
    getTable(window, Nama, JenisKelamin, TanggalLahir, NoTelpon, Email, id, projectId) {
        return getApiNoAuth()
        .get('employees', {
            Nama: Nama,
            JenisKelamin: JenisKelamin,
            TanggalLahir: TanggalLahir,
            NoTelpon: NoTelpon,
            Email: Email,
            id: id,
            projectId: projectId
        })
        .then(function(response) {
            console.log(response)
            return response.data
        }).catch(function (err) {
            console.log(err)
        })
    }
}