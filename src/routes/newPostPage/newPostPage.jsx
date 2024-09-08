import {
  Dropzone,
  FileMosaic,
  FullScreen,
  ImagePreview,
} from "@files-ui/react";
import "./newPostPage.scss";
import { useState } from "react";

function NewPostPage() {
  const [extFiles, setExtFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);

  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setExtFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setExtFiles(extFiles.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleWatch = (videoSource) => {
    setVideoSrc(videoSource);
  };
  const handleStart = (filesToUpload) => {
    console.log("advanced demo start upload", filesToUpload);
  };
  const handleFinish = (uploadedFiles) => {
    console.log("advanced demo finish upload", uploadedFiles);
  };
  const handleAbort = (id) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      })
    );
  };
  const handleCancel = (id) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: undefined };
        } else return { ...ef };
      })
    );
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form>
            <label htmlFor="Images">Фото</label>
            <Dropzone
              onChange={updateFiles}
              minHeight="195px"
              value={extFiles}
              accept="image/*"
              maxFiles={3}
              maxFileSize={5 * 1024 * 1024}
              label="Перетащите файлы сюда или щелкните, чтобы загрузить"
              // uploadConfig={{
              //   // autoUpload: true
              //   url: BASE_URL + "/file",
              //   cleanOnUpload: true,
              // }}
              onUploadStart={handleStart}
              onUploadFinish={handleFinish}
              fakeUpload
              actionButtons={{
                position: "after",
                abortButton: {},
                deleteButton: {},
                uploadButton: {},
              }}
            >
              {extFiles.map((file) => (
                <FileMosaic
                  {...file}
                  key={file.id}
                  onDelete={onDelete}
                  onSee={handleSee}
                  onWatch={handleWatch}
                  onAbort={handleAbort}
                  onCancel={handleCancel}
                  resultOnTooltip
                  alwaysActive
                  preview
                  info
                />
              ))}
            </Dropzone>
            <FullScreen
              open={imageSrc !== undefined}
              onClose={() => setImageSrc(undefined)}
            >
              <ImagePreview src={imageSrc} />
            </FullScreen>
            <div className="item">
              <label htmlFor="title">Название</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Город</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Район</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item">
              <label htmlFor="address">Адрес</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Тип</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Жилое
                </option>
                <option value="buy">Не Жилое</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="address">Ориентир</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item">
              <label htmlFor="address">Кол.комнат</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item">
              <label htmlFor="address">Ремонт</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Требуется ремонт
                </option>
                <option value="buy">Нормальный</option>
                <option value="buy">Хороший</option>
                <option value="buy">Отличный</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="address">Этаж</label>
              <input id="address" name="address" type="text" />
            </div>

            <div className="item description">
              <label htmlFor="desc">Description</label>
              <textarea></textarea>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Add</button>
          </form>
        </div>
      </div>
      <div className="sideContainer"></div>
    </div>
  );
}

export default NewPostPage;
