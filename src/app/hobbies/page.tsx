import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Add photos of your hobbies to the /public folder
// 
// 
// 

export default function HobbiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Hobbies & Interests</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Gaming</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              My gaming passion is split between two modes: I channel my creativity into architectural designs in Minecraft, and I sharpen my reflexes and team communication skills through competitive matches in Valorant.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle> Coding </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I am a passionate technologist who views coding not just as a career, but as a continuous craft. In my spare time, I enjoy exploring emerging technologies and building full-stack applications to solve real-world problems. Whether it is contributing to open-source repositories or automating daily workflows with Python scripts, I am constantly refining my ability to write clean, efficient, and scalable code.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle> Watch Movies </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I view cinema as a powerful art form and love dissecting the cinematography and storytelling of every film I watch.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}