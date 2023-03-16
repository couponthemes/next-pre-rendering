import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Product.module.css";
export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <button className={styles.btn}>
        <Link href={"/"}>Go To Home</Link>
      </button>

      <div className={styles.product}>
        <h3>Product Name</h3>
        <div className={styles.productImgContainer}>
          <Image
            src={
              "https://cdn.ostad.app/course/cover/2022-10-17T13-18-10.202Z-Web%20and%20Postman.jpg"
            }
            width="0"
            height="0"
            sizes="100vw"
            className={styles.productImg}
            alt="product image"
          ></Image>
        </div>
      </div>
    </div>
  );
}
