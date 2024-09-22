import Image from "next/image";
import { Button } from "@repo/ui/button";
import Heading from '@repo/ui/heading';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="myTurbo docs">Hello There</Button>
      <Heading/>
    </div>
  );
}
