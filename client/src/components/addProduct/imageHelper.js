export const uploadImages = async (files) => {
  const images = [];

  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ky8f4udl");
    formData.append("cloud_name", "dkcszebsk");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkcszebsk/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      images.push(data.secure_url);
    } catch (err) {
      console.log(err);
    }
  }

  return images;
};
