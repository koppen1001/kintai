function work(){
    document.getElementById('set_type').value='出勤'
    alert('出勤処理を実行しました。')
    submit()
}

function worked(){
    document.getElementById('set_type').value='退勤'
    alert('退勤処理を実行しました。')
    submit()
}

function ref(){
    document.getElementById('set_type').value='休開'
    alert('休憩開始処理を実行しました。')
    submit()
}

function refed(){
    document.getElementById('set_type').value='休終'
    alert('休憩終了処理を実行しました。')
    submit()
}