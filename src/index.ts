import crypto from 'crypto';

const main = async () => {
    // const hashes = crypto.getHashes();
    // const ciphers = crypto.getCiphers();
    // console.log('hashes = ', hashes);
    // console.log('ciphers = ', ciphers);

    // console.log('======hashing======');
    // const data = 'fuck you';
    // console.log('data = ', data);
    // const hash = crypto.createHash('sha256').update(data).digest('hex');
    // console.log('hash = ', hash);

    console.log('======encrypting======');
    const iv = crypto.randomBytes(16);
    // console.log('iv  = ', iv);
    const secret = 'sinnerman';
    const key = 'fY9>pV7/vU4(aK7&uV3|aY1?eP9&iT4(';

    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encryptedSecret = cipher.update(secret, 'utf-8', 'hex');
    // adds any remaining unciphered contents
    encryptedSecret += cipher.final('hex');
    console.log('encryptedSecret = ', encryptedSecret);

    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decryptedSecret = decipher.update(encryptedSecret, 'hex', 'utf-8');
    decryptedSecret += decipher.final('utf-8');
    console.log('decryptedSecret = ', decryptedSecret);
};

main().catch(err => console.error(err));
