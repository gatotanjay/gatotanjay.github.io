function calculateRREF() {
    const matrix = [
        [4, 5, 6, document.getElementById('b1').value],
        [16, 20, 25, document.getElementById('b2').value],
        [10, 15, 20, document.getElementById('b3').value]
    ];

    let h = 0;
    let k = 0;

    while (h < matrix.length && k < matrix[0].length) {
        let i = h;
        while (matrix[i][k] === 0) {
            i++;
            if (i === matrix.length) {
                k++;
                break;
            }
        }

        if (i === matrix.length) {
            break;
        }

        if (i !== h) {
            let temp = matrix[i];
            matrix[i] = matrix[h];
            matrix[h] = temp;
        }

        let div = matrix[h][k];
        for (let j = k; j < matrix[0].length; j++) {
            matrix[h][j] /= div;
        }

        for (let i = 0; i < matrix.length; i++) {
            if (i === h) {
                continue;
            }

            let mult = matrix[i][k];
            for (let j = k; j < matrix[0].length; j++) {
                matrix[i][j] -= mult * matrix[h][j];
            }
        }

        h++;
        k++;
    }

    let result = "";

        result += matrix[0][matrix[0].length - 1] + "  Sangkar Kecil"+"\n";
        result += matrix[1][matrix[0].length - 1] +"  Sangkar Sedang" +"\n";
        result += matrix[2][matrix[0].length - 1] + "  Sangkar Besar"+"\n";

    document.getElementById('result').value = result;
}

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah form terkirim ke server

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    // Login berhasil
    window.location.href = "admin.html";
    
     // Ganti dengan tindakan yang diinginkan saat login berhasil
    // Contoh: redirect ke halaman lain
    // window.location.href = "index.html";
  } else {
    // Login gagal
    errorMessage.textContent = "Username atau password salah.";
  }
});

function calculateRREFadmin() {
    const matrix = [
        [4, 5, 6, document.getElementById('b1').value],
        [16, 20, 25, document.getElementById('b2').value],
        [10, 15, 20, document.getElementById('b3').value]
    ];

    let h = 0;
    let k = 0;

    while (h < matrix.length && k < matrix[0].length) {
        let i = h;
        while (matrix[i][k] === 0) {
            i++;
            if (i === matrix.length) {
                k++;
                break;
            }
        }

        if (i === matrix.length) {
            break;
        }

        if (i !== h) {
            let temp = matrix[i];
            matrix[i] = matrix[h];
            matrix[h] = temp;
        }

        let div = matrix[h][k];
        for (let j = k; j < matrix[0].length; j++) {
            matrix[h][j] /= div;
        }

        for (let i = 0; i < matrix.length; i++) {
            if (i === h) {
                continue;
            }

            let mult = matrix[i][k];
            for (let j = k; j < matrix[0].length; j++) {
                matrix[i][j] -= mult * matrix[h][j];
            }
        }

        h++;
        k++;
    }

    let result = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            result += matrix[i][j] + " ";
        }
        result += "\n";
    }

    document.getElementById('result').value = result;
}