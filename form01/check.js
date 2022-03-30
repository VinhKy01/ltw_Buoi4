function check()
{
    var tdn = f.TenDangNhap.value;
    var mk = f.password.value;

    if(tdn == '')
    {
        alert('Tên đăng nhập không đc bỏ trống');
        return false;
    }
    
    if(mk == '')
    {
        alert('Mật khẩu không đc bỏ trống');
        return false;
    }

    return true;
}