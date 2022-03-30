function check()
{
    var hoten = f.hoTen.value;

    if(hoten == '')
    {
        alert('Bạn phải nhập vào họ tên !');
        return false;
    }

    return true;
}