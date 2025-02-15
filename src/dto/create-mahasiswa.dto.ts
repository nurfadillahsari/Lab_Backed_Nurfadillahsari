import { ApiProperty } from "@nestjs/swagger";
import { jenis_kelamin } from "@prisma/client";
import { IsEnum,IsNotEmpty, IsString, Length } from "class-validator";

export class CreateMahasiswaDTO {

    @ApiProperty({ description : "NIM", type : String, example : "105841110622" })
    @IsString({message : "NIM Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 12, {message : "Hanya bisa sampai 12 karakter"})
    nim : string;

    @ApiProperty({description :"Nama", type : String, example : "NUR FADILLAH SARI"})
    @IsString({message : "Nama Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 50, {message : "Hanya bisa sampai 50 karakter"})
    nama : string;

    @ApiProperty({description :"Kelas", type : String, example : "5C"})
    @IsString({message : "Kelas Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 2, {message : "Hanya bisa sampai 2 karakter"})
    kelas : string;

    @ApiProperty({description :"Jurusan", type : String, example : "INFORMATIKA"})
    @IsString({message : "Jurusan Harus Bertipe String"})
    @IsNotEmpty({message : "Tidak Boleh Kosong"})
    @Length(1, 20, {message : "Hanya bisa sampai 20 karakter"})
    jurusan : string;

    @ApiProperty({
        enum : jenis_kelamin,
        description :"Jenis Kelamin",
        example : "P"
    })
    @IsEnum(jenis_kelamin, {
        message : "Jenis Kelamin hanya bernilai L atau P"
    })
    jenis_kelamin : jenis_kelamin

}