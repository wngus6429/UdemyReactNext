"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    // input 요소에서 선택한 파일 목록 중 첫 번째 파일을 가져옴
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    // 파일을 읽기 위한 FileReader 인스턴스를 생성
    const fileReader = new FileReader();

    // 파일 읽기가 완료되면 실행되는 콜백 함수 설정
    fileReader.onload = () => {
      // 읽은 파일의 데이터를 Data URL 형식으로 상태(pickedImage)에 저장하여,
      // 이미지 미리보기를 렌더링할 수 있게 함
      setPickedImage(fileReader.result);
    };
    // 선택된 파일을 Data URL 형식으로 비동기적으로 읽기 시작
    // Data URL은 파일 데이터를 base64로 인코딩하여 문자열 형태로 반환함
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

// "use client"; // Next.js에서 해당 컴포넌트가 클라이언트 사이드에서 렌더링됨을 명시합니다.
// import { useRef } from "react"; // DOM 엘리먼트에 직접 접근하기 위해 사용됩니다.
// import classes from "./image-picker.module.css";

// export default function ImagePicker({ label, name }) {
//   // imageInput은 파일 입력(input) 엘리먼트를 참조하기 위한 ref입니다.
//   const imageInput = useRef();

//   // handlePickClick 함수는 버튼 클릭 시, 숨겨진 파일 입력을 대신 클릭하도록 합니다.
//   function handlePickClick() {
//     // imageInput.current는 실제 input DOM 엘리먼트,
//     // click() 메서드를 호출해 파일 선택 창을 띄웁니다.
//     imageInput.current.click();
//   }

//   return (
//     <div className={classes.picker}>
//       {/* label 요소는 사용자가 어떤 입력을 해야하는지 안내합니다.
//           htmlFor 속성은 연결된 input의 id와 일치해야 합니다. */}
//       <label htmlFor={name}>{label}</label>
//       {/* 파일 선택과 버튼 컨트롤을 그룹화하는 div */}
//       <div className={classes.controls}>
//         {/* - type="file"로 파일 선택 창을 띄우도록 설정합니다.
//           - accept 속성을 통해 선택 가능한 파일 형식을 이미지(png, jpeg)로 제한합니다.
//           - id 속성은 위에 라벨 htmlFor와 연결
//           - ref 속성을 통해 useRef로 만든 imageInput과 연결합니다. */}
//         <input className={classes.input} type="file" id={name}
//           accept="image/png, image/jpeg" name={name} ref={imageInput}/>
//         {/* 파일 선택 버튼입니다.
// - type="button"으로 폼 제출이 아닌 일반 버튼임을 명시합니다.
// - onClick 이벤트에 handlePickClick 함수를 연결해, 버튼 클릭 시 파일 입력이 트리거됩니다. */}
//         <button className={classes.button} type="button" onClick={handlePickClick}>
//           Pick an Image
//         </button>
//       </div>
//     </div>
//   );
// }
