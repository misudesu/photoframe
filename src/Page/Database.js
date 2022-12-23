import bezaye from '../asset/bezaye.png'
import hack from '../asset/hack.png'
import lene from '../asset/lene.png'

import frameImage from '../asset/new.PNG'
import landone from '../asset/landone.png'
const   Database={
    // frame list
    image:[
        {name:'hack',img:hack},
        {name:'lene',img:lene},
        {name:'bezaye',img:bezaye},
       
    ],
howto:[
    {name:'Open የኔ Frame and click "Add a Photo Frame Now".'},
    {name:'Search Frame from Search Engines.'},
    {name:'Upload a photo you want to modify.'},
    {name:'Click " adjest to move your image or use other tools to make photo fit into frame size.'},
     {name:'you can try different styles frame one at a time and select the best one for yourself.'},
     {name:'Download your image.'}
],
//   for landing page only
        image1:'https://firebasestorage.googleapis.com/v0/b/enzemr-9b526.appspot.com/o/my-image%20(4).png?alt=media&token=8bc80cb1-6dc8-4e8b-8aa5-b7be5976a251',
        image2:'https://firebasestorage.googleapis.com/v0/b/enzemr-9b526.appspot.com/o/new.PNG?alt=media&token=a1edcf92-5a05-45cb-ae29-95adb0ef909a',
        secondDis:"Photo frame is a unique photo effect, and you can use the frame to add subtle or contrast to your photo and enhance its layout. You can adjust the outer size, inner size, rounder corner of an image in the የኔ frame and add a special perspective to the photo. A የኔ photo frame would be great for your event photos in the best way. See what kinds of great things you can create with the square picture frames",
        firstDis:'Each day, around the world millions of Profile Frames are used to celebrate important moments, to cheer teams on to victory, and to show support for special causes.'
    // photo edit option
    ,

}
export const DEFAULT_OPTIONS = [
    {
      name: "Brightness",
      property: "brightness",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Contrast",
      property: "contrast",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Saturation",
      property: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Grayscale",
      property: "grayscale",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Sepia",
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Hue Rotate",
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360,
      },
      unit: "deg",
    },
    {
      name: "Blur",
      property: "blur",
      value: 0,
      range: {
        min: 0,
        max: 20,
      },
      unit: "px",
    },
  ];
export default Database;