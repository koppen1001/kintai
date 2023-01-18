function work(){
    document.getElementById('set_type').value='出勤'
    alert('出勤処理を実行しました。')
    submit()
    
}
function worked(){
    document.getElementById('set_type').value='退勤'
    submit()
    alert('退勤処理を実行しました。')
}