function myFunction() {
// Alert chào mừng
    alert('Chào mừng bạn đến với ứng dụng JavaScript đầu tiên!');
    
// Nhập tên
    var name = prompt('Hãy nhập tên của bạn:');
    document.getElementById('name').innerHTML = 'Name: ' + name;
    
// Nhập thành phố
    var city = prompt('Hãy nhập thành phố bạn đang sống:');
    document.getElementById('city').innerHTML = 'City: ' + city;
    
// Nhập số điện thoại
    var mobile = prompt ('Hãy nhập số điện thoại của bạn:')
    document.getElementById('mobile').innerHTML = 'Mobile: ' + mobile;

// Nhập năm sinh
    function calcAge() {
        var yearOfBirth = prompt('Hãy nhập năm sinh');
        var yearNow = new Date().getFullYear();
        if(yearNow > yearOfBirth) {
            return yearNow - yearOfBirth;
        } else {
            while(yearOfBirth > yearNow) {
                yearOfBirth = prompt('Hãy nhập lại năm sinh');
            }
            return yearNow - yearOfBirth;
        }
    }
    document.getElementById('age').innerHTML = 'Age: ' + calcAge();

// Nhập E-mail
    var eMail = prompt('Hãy nhập e-Mail của bạn:');
    document.getElementById('email').innerHTML = 'e-Mail: ' + eMail;

// Nhập công việc
    var jobs = prompt('Hãy nhập công việc hiện tại của bạn:');
    document.getElementById('jobs').innerHTML = 'Jobs: ' + jobs;

// Hiện button
    document.getElementById("div-btn").style.display = 'block';
}