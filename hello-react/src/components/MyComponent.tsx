function MyComponent() {
  let x = 65526;
  const names = ["John Doe", "Chuck Norris", "Jane Doe", "Pakorn Riversil"];
  const users = names.map((name) => <li>{name}</li>);
  x = (x % 1000) / 100;
  return (
    <>
      <p>This is demo content. {x}</p>
      <p>
        We use the style {x}attribute to set the font color in HTML. The style
        attribute specifies an inline style for an element, with the CSS
        property color. The attribute is used with the HTML tag, with the CSS
        property color. HTML5 {x} do not support the tag, so the CSS style is
        used to add font color.{x} The tag deprecated in HTML5.
      </p>
      <p>
        ที่อยู่: 140 ถนน เชื่อมสัมพันธ์ แขวงกระทุ่มราย
        เขตหนองจอกกรุงเทพมหานคร10530 ไทย เวลาทำการ: เปิด ⋅ ปิด 17:00 น.
        โทรศัพท์: 02 9883666 ก่อตั้ง:27 กุมภาพันธ์ 2533 ผู้ก่อตั้ง: สิทธิชัย
        โภไคยอุดม คติพจน์:ความรู้คือพลัง ชื่อย่อ: มทม. / MUT ที่ตั้ง: 140
        ถนนเชื่อมสัมพันธ์แขวงกระทุ่มราย เขตหนองจอก กรุงเทพมหานคร 10530 นายกสภาฯ:
        ศาสตราจารย์ดร.สิทธิชัย โภไคยอุดม สถาปนา: 27 กุมภาพันธ์ พ.ศ. 2533 (33 ปี)
      </p>
      <p>{users}</p>
    </>
  );
}
export default MyComponent;
