let images = [
  'productImages/image1.jpg',
  'productImages/image2.jpg',
  'productImages/image3.jpg',
  'productImages/image4.jpg',
  'productImages/image5.jpg',
  'productImages/image6.jpg',
];

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

function checkImageExists(imageUrl, callBack) {
  var imageData = new Image();
  imageData.onload = function () {
    callBack(true);
  };
  imageData.onerror = function () {
    callBack(false);
  };
  imageData.src = imageUrl;
}
// folder part
function loadFromPath() {
  var bCheckEnabled = true;
  var bFinishCheck = false;
  var img;
  var imgArray = new Array();
  var i = 1;
  var fileNameArray = [];
  var myInterval = setInterval(loadImage, 1);

  function loadImage() {
    if (bFinishCheck) {
      clearInterval(myInterval);
      //alert("Loaded " + i + " image(s)!)");
      return;
    }

    if (bCheckEnabled) {
      bCheckEnabled = false;

      img = new Image();
      img.onload = fExists;
      img.onerror = fDoesntExist;
      img.src = 'productImages/' + i + '.jpg';
      fileNameArray.push('productImages/' + i + '.jpg');
    }
  }

  function fExists() {
    i++;
    bCheckEnabled = true;
  }

  function fDoesntExist() {
    bFinishCheck = true;
  }
  return fileNameArray;
}
//  folder part

// image url that want to check

//Here pass image url like imageFile in function to check image exist or not.

function loadImages() {
  let activeDotNum = 0;
  let clickedDotNum = 0;
  // Keep track of image

  let imageIndex = 0;
  // Initially load image details into DOM
  loadImg(images[0]);

  // Update image details
  function loadImg(image) {
    //check if image exists
    checkImageExists(image, function (existsImage) {
      if (existsImage == true) {
        cover.src = `${image}`;
      } else {
        alert(`Image does not exist for given url:  ${image}`);
        window.localStorage.clear();
        location.reload(true);
      }
    });
  }

  // Previous image
  function previmage() {
    imageIndex--;
    if (imageIndex < 0) {
      imageIndex = images.length - 1;
    }
    if (activeDotNum === 0) {
      activeDotNum = 2;
    } else {
      activeDotNum--;
    }
    loadImg(images[imageIndex]);
    console.log('image_index: ', imageIndex);
    console.log('activeDotNum: ', activeDotNum);
  }

  // Next image
  function nextimage() {
    imageIndex++;

    if (imageIndex > images.length - 1) {
      imageIndex = 0;
    }
    if (activeDotNum === 2) {
      activeDotNum = 0;
    } else {
      activeDotNum++;
    }
    loadImg(images[imageIndex]);
    //console.log("image_index: ", imageIndex);
    //console.log("active: ", activeDotNum);
  }

  prevBtn.addEventListener('click', previmage);
  nextBtn.addEventListener('click', nextimage);
  dots.forEach((dot, idx) => {
    //   number each dot according to array index
    dot.setAttribute('data-num', idx);

    //   add a click event listener to each dot
    dot.addEventListener('click', (e) => {
      clickedDotNum = e.target.dataset.num;

      //console.log(typeof clickedDotNum); // this is string !!!!
      var temp = parseInt(clickedDotNum);
      clickedDotNum = temp;
      /*
          console.log(typeof clickedDotNum);
          console.log(typeof activeDotNum);
          console.log("clicked NOW: ", clickedDotNum);
          console.log("active First: ", activeDotNum);
          */
      if (clickedDotNum == activeDotNum) {
        //do nothing
        //console.log("they are equal");
        //console.log("--------------------------");
        return;
      } else {
        //if active is bigger
        if (activeDotNum > clickedDotNum) {
          /*
              console.log("active is bigger then clicked");
              console.log("activeDotNum: ", activeDotNum);
              console.log("clickedDotNum: ", clickedDotNum);
              */
          if (activeDotNum === clickedDotNum + 1) {
            //console.log("activeDotNum == clickedDotNum + 1");
            imageIndex--;
            if (imageIndex < 0) {
              imageIndex = images.length - 1;
            }
            if (activeDotNum == 0) {
              activeDotNum = 2;
            } else {
              activeDotNum--;
            }
            loadImg(images[imageIndex]);
            //console.log("image_index: ", imageIndex);
            //console.log("activeDotNum: ", activeDotNum);
          } else {
            activeDotNum = activeDotNum - 2;
            imageIndex = imageIndex - 2;
            if (imageIndex < 0) {
              imageIndex = images.length - 1;
            }

            loadImg(images[imageIndex]);
            //console.log("image_index: ", imageIndex);
            //console.log("activeDotNum: ", activeDotNum);
          }
        } else {
          //clicked  is bigger
          if (clickedDotNum == activeDotNum + 1) {
            imageIndex++;

            if (imageIndex > images.length - 1) {
              imageIndex = 0;
            }
            if (activeDotNum == 2) {
              activeDotNum = 0;
            } else {
              activeDotNum++;
            }
            loadImg(images[imageIndex]);
            //console.log("image_index: ", imageIndex);
            //console.log("active: ", activeDotNum);
          } else {
            imageIndex = imageIndex + 2;

            if (imageIndex > images.length - 1) {
              imageIndex = 0;
            }
            activeDotNum = activeDotNum + 2;
            loadImg(images[imageIndex]);
          }
        }
      }
      //console.log("active END: ", activeDotNum);
      //console.log("--------------------------");
    });
  });
}

// Events
var arr = loadFromPath();

//console.log(images[0]);
//images = arr;

loadImages();

console.log(arr);
//console.log(arr[0]);
//console.log(arr[1]);
