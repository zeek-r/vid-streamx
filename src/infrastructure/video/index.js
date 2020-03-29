let s3 = null;

function getFile({ key = "", bucket = "" }) {
  const s3Params = {
    Key: key,
    Bucket: bucket
  };
  return s3.getObject(s3Params).createReadStream();
}

function putObject({ key = "", bucket = "" }) {
  console.log(Object.keys(s3));
  return;
}

function init({ S3 = {} }) {
  s3 = S3;
  return { getFile, putObject };
}

module.exports = { init };
