const db = require('../utils/db')
const fs = require('fs');
const path = require('path');
// const asdas = require('../../public/files/notaris/')

class NotarisController {
    async jasaNotaris(req, res) {
        const data = await db.promise().query(`SELECT * FROM notaris`)

        return res.json({
            data: data[0],
        });
    }

    async detailNotaris(req, res) {
        const notaris_id = req.params.notaris_id
        const data = await db.promise().query(`SELECT * FROM notaris WHERE notaris_id = '${notaris_id}'`)

        return res.json({
            data: data[0],
        });
    }

    // async postNotaris(req, res) {
    //     try {
    //         const data = req.body;
    //         const files = req.files;
    //         const nama = data.nama
    //         const alamat = data.alamat
    //         const email = data.email
    //         const no_hp = data.no_hp
    //         const foto = data.foto
    //         const notaris_sertifikat = files.notaris_sertifikat
    //         const deskripsi_notaris = files.deskripsi_notaris

    //         const checkNama = await db.promise().query(`SELECT nama FROM notaris WHERE nama = '${nama}'`)
    //         const checkEmail = await db.promise().query(`SELECT email FROM notaris WHERE email = '${email}'`)

    //         if (checkNama[0].length == 1) {
    //             return res.json({
    //                 message: "Maaf Nama sudah terdaftar"
    //             })
    //         } if (checkEmail[0].length == 1) {
    //             return res.json({
    //                 message: "Maaf Email sudah terdaftar"
    //             })
    //         }

    //         const fotoPath = path.join(__dirname, '../../public/img_data/notaris', foto);
    //         fs.writeFileSync(fotoPath, foto, 'base64');

    //         const sertifikatPath = path.join(__dirname, '../../public/files/notaris', notaris_sertifikat);
    //         fs.writeFileSync(sertifikatPath, notaris_sertifikat, 'base64');

    //         await db.promise().query(`INSERT INTO notaris (nama, alamat, email, no_hp, foto, notaris_sertifikat, deskripsi_notaris) VALUES ('${nama}', '${alamat}', '${email}', '${no_hp}', '${foto}', '${notaris_sertifikat}', '${deskripsi_notaris}')`)

    //         console.log('Received data:', data);
    //         console.log('Received files:', files);
    //         return res.json({
    //             message: 'Anda berhasil melakukan pendaftaran'
    //         });
    //     } catch (error) {
    //         return res.json({
    //             message: 'Gagal melakukan pendaftaran'
    //         });
    //     }
    // }

    async postNotaris(req, res) {
        const data = req.body;
        const file = req.files;
        const nama = data.nama
        const alamat = data.alamat
        const email = data.email
        const no_hp = data.no_hp
        const foto = file.foto
        const notaris_sertifikat = file.notaris_sertifikat
        const deskripsi_notaris = data.deskripsi_notaris

        const checkNama = await db.promise().query(`SELECT nama FROM notaris WHERE nama = '${nama}'`)
        const checkEmail = await db.promise().query(`SELECT email FROM notaris WHERE email = '${email}'`)

        if (checkNama[0].length == 1) {
            return res.json({
                message: "Maaf Nama sudah terdaftar"
            })
        } if (checkEmail[0].length == 1) {
            return res.json({
                message: "Maaf Email sudah terdaftar"
            })
        }

        console.log(req.files);
        console.log(req.body);

        const timestamp = Date.now();

        // Direktori tempat menyimpan foto
        const uploadDir = path.join(__dirname, '../../public/img_data/notaris/');
        const uploadDir2 = path.join(__dirname, '../../public/files/notaris/');

        // Menyimpan file foto
        const fotoPath = path.join(uploadDir, `${timestamp}${path.extname(foto.name)}`);
        foto.mv(fotoPath, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal menyimpan file foto' });
            }
        });

        // Menyimpan file foto
        const sertifikatPath = path.join(uploadDir2, `${timestamp}${path.extname(notaris_sertifikat.name)}`);
        notaris_sertifikat.mv(sertifikatPath, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal menyimpan file sertifikat notaris' });
            }
        });

        await db.promise().query(`INSERT INTO notaris (nama, alamat, email, no_hp, foto, notaris_sertifikat, deskripsi_notaris) VALUES ('${nama}', '${alamat}', '${email}', '${no_hp}', '${path.basename(fotoPath)}', '${path.basename(sertifikatPath)}', '${deskripsi_notaris}')`)

        return res.json({
            message: 'Anda berhasil melakukan pendaftaran'
        });
    }
}

module.exports = new NotarisController()