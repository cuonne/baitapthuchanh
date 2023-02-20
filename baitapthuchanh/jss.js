let btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", function () {
  let stuName = document.getElementById("stuName").value;
  let listStu = JSON.parse(localStorage.getItem("listStu"));
  let exist = false;
  if (listStu != null) {
    for (const product of listStu) {
      if (product.stuName == stuName) {
        exist = true;
        break;
      }
    }
  }
  if (exist) {
    editStu();
  } else {
    createStu();
  }
});

function createStu() {
  let listStu = JSON.parse(localStorage.getItem("listStu"));
  if (listStu == null) {
    listStu = [];
  }

  let stuName = document.getElementById("stuName").value;
  let stuEmail = document.getElementById("stuEmail").value;
  let homeLand = document.getElementById("homeLand").value;
  let stuPhone = parseFloat(document.getElementById("stuPhone").value);

  let stuNew = {
    stuName: stuName,
    stuEmail: stuEmail,
    stuPhone: stuPhone,
    homeLand: homeLand,
  };

  listStu.push(stuNew);

  localStorage.setItem("listStu", JSON.stringify(listStu));

  readListStu();
}
function readListStu() {
  let listStu = JSON.parse(localStorage.getItem("listStu"));
  if (listStu == null) {
    listStu = [];
  }

  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  listStu.forEach((stu, index) => {
    tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${stu.stuName}</td>
                    <td>${stu.stuEmail}</td>
                    <td>${stu.stuPhone}</td>
                    <td>${stu.homeLand}</td>
                    <td>
                        <button onclick="updateStu('${
                          stu.stuName
                        }')">Edit</button>
                        <button onclick="deleteStu('${
                          stu.stuName
                        }')">Delete</button>
                    </td>
                </tr>`;
  });
}
readListStu();
function updateStu(stuName) {
  let listStu = JSON.parse(localStorage.getItem("listStu"));

  let stuUpdate = listStu.filter((stu) => {
    if (stu.stuName == stuName) {
      return stu;
    }
  });

  document.getElementById("stuName").value = stuUpdate[0].stuName;
  document.getElementById("stuEmail").value = stuUpdate[0].stuEmail;
  document.getElementById("homeLand").value = stuUpdate[0].homeLand;
  document.getElementById("stuPhone").value = stuUpdate[0].stuPhone;
}
function editStu() {
  let listStu = JSON.parse(localStorage.getItem("listStu"));

  let stuName = document.getElementById("stuName").value;
  let stuEmail = document.getElementById("stuEmail").value;
  let homeLand = document.getElementById("homeLand").value;
  let stuPhone = parseFloat(document.getElementById("stuPhone").value);

  let liststuUpdate = listStu.map((stu) => {
    if (stu.stuName == stuName) {
      stu.stuEmail = stuEmail;
      stu.stuPhone = stuPhone;
      stu.homeLand = homeLand;
    }
    return stu;
  });

  localStorage.setItem("listStu", JSON.stringify(liststuUpdate));

  readListStu();
}

function deleteStu(stuName) {
  let listStu = JSON.parse(localStorage.getItem("listStu"));

  for (let i = 0; i < listStu.length; i++) {
    if (listStu[i].stuName == stuName) {
      listStu.splice(i, 1);
      break;
    }
  }

  localStorage.setItem("listStu", JSON.stringify(listStu));

  readListStu();
}

/// chưa test....

// const btnRegister = document.getElementById('btn-register');

// btnRegister.addEventListener('click', function () {
//     let isValid = checkValidate();

//     if (isValid) {
//         alert('Gửi đăng ký thành công');
//     }
// });

//
// const btnRegister = document.getElementById('btn-register');

// btnRegister.addEventListener('click', function () {
//     let isValid = checkValidate();

//     if (isValid) {
//         alert('Gửi đăng ký thành công');
//     }
// });

// // Truy cập vào các ô input
// const usernameEle = document.getElementById('username');
// const emailEle = document.getElementById('email');
// const phoneEle = document.getElementById('phone');

// // Validate dữ liệu trong các ô input và highlight
// function checkValidate() {
//     let usernameValue = usernameEle.value;
//     let emailValue = emailEle.value;
//     let phoneValue = phoneEle.value;

//     let isCheck = true;

//     // Kiểm tra trường username
//     if (usernameValue == '') {
//         setError(usernameEle, 'Tên không được để trống');
//         isCheck = false;
//     } else {
//         setSuccess(usernameEle);
//     }

//     // Kiểm tra trường email
//     if (emailValue == '') {
//         setError(emailEle, 'Email không được để trống');
//         isCheck = false;
//     } else if (!isEmail(emailValue)) {
//         setError(emailEle, 'Email không đúng định dạng');
//         isCheck = false;
//     } else {
//         setSuccess(emailEle);
//     }

//     // Kiểm tra trường phone
//     if (phoneValue == '') {
//         setError(phoneEle, 'Số điện thoại không được để trống');
//         isCheck = false;
//     } else if (!isPhone(phoneValue)) {
//         setError(phoneEle, 'Số điện thoại không đúng định dạng');
//         isCheck = false;
//     } else {
//         setSuccess(phoneEle);
//     }

//     return isCheck;
// }
