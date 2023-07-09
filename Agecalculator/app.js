var Calbtn = document.getElementById('btn');
var ans = document.getElementById('result');

//console.log(new Date());

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1; // Adding 1 because the month is zero-based (0-11)
var day = today.getDate();

console.log(year, month, day);

let diffYear, diffMonth, diffDay;

function submit() {
  // Assuming the text input has an id attribute of "dobInput"
  var dobInput = document.getElementById('dobInput').value;
  var dateOfBirth = new Date(dobInput);

  // console.log(dateOfBirth);

  let Bday = dateOfBirth.getDate();
  let Bmonth = dateOfBirth.getMonth() + 1;
  let Byear = dateOfBirth.getFullYear();

  console.log(Bday, Bmonth, Byear);

  diffYear = year - Byear;

  // get months diff
  if (Bmonth <= month) {
    diffMonth = month - Bmonth;
  } else {
    diffYear--;
    diffMonth = 12 + month - Bmonth;
  }

  //get date diff

  if (day >= Bday) {
    diffDay = day - Bday;
  } else {
    diffMonth--;
    diffDay = 31 + day - Bday;

    if (diffMonth < 0) {
      diffMonth = 11;
      diffYear--;
    }
  }

  // console.log(diffDay);

  ans.innerHTML =
    ' your age is ' +
    '<br>' +
    diffYear +
    ' years ' +
    diffMonth +
    ' months ' +
    diffDay +
    ' days ';
  Calbtn.innerHTML = 'okay got it !';
}

Calbtn.addEventListener('click', submit);
