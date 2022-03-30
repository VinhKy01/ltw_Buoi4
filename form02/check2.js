function check()
{
    var ht = f.HoTen.value;
    var dc = f.DiaChi.value;
    var e = f.Email.value;
    var dt = f.DienThoai.value;

    var ktrsdt = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    var ktremail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(ht == '')
    {
        alert('Bạn phải nhập tên !')
        return false;
    }
    else
    {
        if(dc == '')
        {
            alert('Bạn phải nhập địa chỉ !')
            return false;
        }
        else
        {
            if(!ktrsdt.test(dt))
            {
                alert('Số điện thoại không hợp lệ !')
                return false;
            }
            else
            {
                if(!ktremail.test(e))
                {
                    alert('Email không hợp lệ !')
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }
    }
}