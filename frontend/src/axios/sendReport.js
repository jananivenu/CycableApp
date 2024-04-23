import UserAxios from '.'

const sendReport = async (reportData) => {
  try {
    const response = await UserAxios.post('/reports/new/incident/', reportData)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('error sending report: ', error)
  }
}
export default sendReport
