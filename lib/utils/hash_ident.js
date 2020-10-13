

class hashIdent {
  index(input_, callback) {
    var input = `${input_}`
    var charlength = input.length
    var plussalt = false
    var bitlength = 0
    var chartype = 'Unknown'
    var hashtype = 'unknown'

    if (isb64(input)) {
      var chartype = 'base64'
      bitlength = charlength * 6
    }

    if (ishex(input)) {
      var chartype = 'hexidecimal'
      bitlength = input.length * 4
    }

    // analisi klasifikasi input
    if ((input.match(/:/g) || []).length == 1) {
      var saltandhash = input.split(':')
      if (ishex(saltandhash[0])) {
        var chartype = 'hexidecimal'
        bitlength = saltandhash[0].length * 4
        plussalt = true
      }
      if (isb64(saltandhash[0])) {
        var chartype = 'base64'
        bitlength = saltandhash[0].length * 4
        plussalt = true
      }
    }

    if ((input.match(/:/g) || []).length > 1) {
      hashtype = 'NTLM?'
    }

    if ((input.startsWith("md5"))) {
      hashtype = "MD5";
    }

    if ((chartype == 'base64') && (bitlength == 96)) {
      hashtype = 'Cisco ASA or PIX MD5';
    }

    if ((chartype == 'hexidecimal') && (bitlength == 128)) {
      hashtype = 'MD5 or MD4';
    }

    if ((chartype == 'hexidecimal') && (bitlength == 160)) {
      hashtype = 'SHA1 (or SHA 128)';
    }

    if ((chartype == 'hexidecimal') && (bitlength == 224)) {
      hashtype = 'SHA 224';
    }

    if ((chartype == 'hexidecimal') && (bitlength == 256)) {
      hashtype = 'SHA2-256';
    }

    if ((chartype == 'hexidecimal') && (bitlength == 384)) {
      hashtype = 'SHA2-384';
    }

    if ((chartype == 'hexidecimal') && (bitlength == 512)) {
      hashtype = 'SHA2-512';
    }

    if ((chartype == 'hexidecimal') && (bitlength == 64)) {
      hashtype = 'LM or MySQL < version 4.1';
    }

    if ((chartype == 'hexidecimal') && (bitlength == 240)) {
      hashtype = 'Oracle 11';
    }

    if (charlength == 13) {
      hashtype = 'DES or 3DES?';
    }

    if (charlength == 41) {
      if (input[0] == "*") {
        if (ishex(input.substring(1))) {   // check if the string after the * is hex
          hashtype = 'MySQL5';
          chartype = 'star followed by hexidecimal';
          bitlength = 4 * 40;
        }
      }
    }

    if (charlength == 34) {
      if ((input[0] == '$') && (input[1] == 'P') && (input[2] == '$')) {
        if (isalphanumeric(input[3])) {
          hashtype = 'MD5 Wordpress';
          chartype = '$P$ followed by alphanumerics';
          bitlength = 6 * 31;
        }
      }
    }

    if (charlength == 34) {
      if ((input[0] == '$') && (input[1] == 'H') && (input[2] == '$')) {
        if (isalphanumeric(input[3])) {
          hashtype = 'MD5 phpBB3';
          chartype = '$H$ followed by alphanumerics';
          bitlength = 6 * 31;
        }
      }
    }

    if (input.startsWith("$2a$") || input.startsWith("$2b$") || input.startsWith("$2y$")) {
      var saltandhash = input.substring(input.lastIndexOf("$") + 1);
      var thissalt = saltandhash.slice(0, 22);
      var thishash = saltandhash.slice(22);
      if (thishash.length == 31) {
        hashtype = 'bcrypt';
        chartype = '$2x$x$ followed by base64';
        bitlength = 184;
      }
    }

    if ((input.startsWith("$1$")) && (charlength == 34)) {
      hashtype = "MD5-Crypt";
      var thissalt = input.slice(3, 11);
      var thishash = input.slice(12);
      chartype = "Mostly base64";
      bitlength = 128;
    }

    if ((input.startsWith("$PHPS$")) && (charlength == 45)) {
      //$PHPS$327235$afd358dd12afc6c394f309624d5912e7
      hashtype = "PHP-MD5-Crypt";
      var thissalt = input.slice(6, 12);
      var thishash = input.slice(13);
      chartype = "Mostly hexadecimal";
      bitlength = 128;
    }

    if ((input.startsWith("$6$")) && (charlength == 106)) {
      //$6$gjxgtlzspT2wzWJW$61tKBfooVrQC6/hYZ3TXKpFuLmNnAHomE/Ccf.dRWDo87W2MeoeOSPGSYNlAGfDwYugiV.KGWJGSEzXEjT4OI0
      hashtype = "SHA512-Crypt";
      var thissalt = input.slice(3, 19);
      var thishash = input.slice(20);
      chartype = "$6$ followed by base64";
      bitlength = 512;
    }

    if ((input.startsWith("$md5$rounds="))) {
      //$md5$rounds=904$BZ6wgh3sv4Q5hmhr$dIc7H0R4s0M0eDkDQEJf31
      hashtype = "Sun MD5";
      var thissalt = input.slice(16, 32);
      var thishash = input.slice(33);
      chartype = "Mostly base64";
      bitlength = 128;
    }

    if ((input.startsWith("{SSHA}"))) {
      //{SSHA}u+cwWa3895SQjBcpC5xShYkaYYxNZk1OMWxoQg==
      hashtype = "Salted SHA";
      if (isb64(input.slice(6))) {
        var chartype = 'base64';
        bitlength = charlength * 6;
      }
    }

    if ((input.startsWith("{SHA}"))) {
      //{SHA}raMJLbQTEfVYt9feePKfWKf9H1Q=
      hashtype = "SHA";
      if (isb64(input.slice(5))) {
        var chartype = 'base64';
        bitlength = charlength * 6;
      }
    }

    if (plussalt) {
      hashtype = hashtype + ' : plus salt'
    }

    callback(undefined, {
      hash: input,
      hash_type: hashtype,
      bit_length: bitlength,
      char_length: charlength,
      char_type: chartype
    })

    if ((hashtype == "bcrypt") || (hashtype=="MD5-Crypt") || (hashtype=="PHP-MD5-Crypt")) {
      callback(undefined, {
        hash: thishash,
        salt: thissalt
      })
    }

//    console.log(output)

    function isb64(hash){
      try {
        return btoa(atob(hash)) == hash;
      } catch (err) {
        return false;
      }
    }

    function ishex(num){ 
      var validChar='0123456789ABCDEFabcdef'; 
      var flag=true; 
      var x=num.toUpperCase(); 
      for(let idx=0;idx<x.length;idx++){ 
        if(validChar.indexOf(x.charAt(idx))<0){ 
          return false; 
        } 
      } 
      return true; 
    } 

    function isalphanumeric(num){ 
      var validChar='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
      var flag=true; 
      var x=num.toUpperCase(); 
      for(let idx=0;idx<x.length;idx++){ 
        if(validChar.indexOf(x.charAt(idx))<0){ 
          return false; 
        } 
      } 
      return true; 
    } 

    function trim(stringToTrim) {
      stringToTrim = stringToTrim.replace(/\s+/g, " ");
      return stringToTrim.replace(/^\s+|\s+$/g,"");
    }
  }
}


// new hashIdent().index(process.argv[2], (error, {hash, hash_type, bit_length, char_length, char_type} = {}) => {
//   return console.log(hash, hash_type, bit_length, char_length, char_type)
// })

module.exports = hashIdent


