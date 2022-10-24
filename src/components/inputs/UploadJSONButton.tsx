import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { InformationIcon } from "./InformationIcon";

interface Props {
  text: string
  onUploaded: (object: any) => void  
}
export const UploadJSONButton = ({ text, onUploaded }: Props) => {

  const retrieveJSONObject = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return 
    const files = Array.from(e.target.files)
    const jsonFiles = files.filter(file => file.type === "application/json")
    
    if (jsonFiles.length !== 1) {
      alert("U kunt slechts 1 json uploaden")
      return
    }

    const file = jsonFiles[0]

    const fileReader = new FileReader()
    fileReader.readAsText(file, "UTF-8")

    fileReader.onload = e => {
      const fileAsText = e.target?.result
      const isString = typeof fileAsText === "string"
      if (isString) {
        const object = JSON.parse(fileAsText)
        onUploaded(object)
      }
    }
  }

  return (
    <Button
      variant="contained"
      component="label"
    >
      <div className="flex flex-row gap-2">
        <div> {text} </div>
        <FileUploadOutlinedIcon />
        <InformationIcon informationText="upload json" />
      </div>
      <input
        type="file"
        hidden
        multiple
        onChange={(e) => {
          retrieveJSONObject(e)
          // @ts-ignore
          e.target.value = null  // reset file input
        }}
      />
    </Button>
  )
}