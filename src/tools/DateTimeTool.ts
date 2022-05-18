import moment from "moment";

class DateTimeTool
{
    public currentDateTime()
    {
        return moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

export default new DateTimeTool();