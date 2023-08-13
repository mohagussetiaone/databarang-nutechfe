import { Inter } from "next/font/google";
import Layout from "@/components/layouts";

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl font-bold h-[350px] mt-20 ml-16 ">
          Selamat Datang di Portal <b className="text-blue">Sistem Informasi Data Barang!</b>
        </h1>
      </Layout>
    </div>
  );
}
