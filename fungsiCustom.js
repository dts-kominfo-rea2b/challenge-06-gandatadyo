// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let dataresult = [];

  const readingFile1 = (callback, nextStep) => {
    fs.readFile(file1, (err, data) => {
      if (err) {
        callback(err, dataresult)
        return
      }
      const temp = JSON.parse(data)
      dataresult.push(temp.message.split(' ')[1]);
      nextStep(callback);
    });
  }
  const readingFile2 = (callback, nextStep) => {
    fs.readFile(file2, (err, data) => {
      if (err) {
        callback(err, dataresult)
        return
      }
      const temp = JSON.parse(data)
      if (temp.length > 0) {
        dataresult.push(temp[0].message.split(' ')[1]);
      };
      nextStep(callback);
    });
  }
  const readingFile3 = (callback) => {
    fs.readFile(file3, (err, data) => {
      if (err) {
        callback(err, dataresult)
        return
      }
      const temp = JSON.parse(data)
      if (temp.length > 0) {
        dataresult.push(temp[0].data.message.split(' ')[1]);
      }
      callback(null, dataresult);
    });
  }
  readingFile1(fnCallback, (callback1) => {
    readingFile2(callback1, (callback2) => {
      readingFile3(callback2)
    })
  })

};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
