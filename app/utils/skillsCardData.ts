//ver si mover a skillsContent

export type SkillsCards = {
    title: string, 
    svgIcon : React.ReactElement;
} 

export type SkillsContent = {
    title : string,
    texts : {
        id: number,
        content: string
    }[]
    svgIcon : React.ReactElement;
}


export type ContentProps = {
    handleContentChange: (index: number) => void;
  };

