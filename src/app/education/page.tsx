import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function EducationPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Naga College Foundation</CardTitle>
            <CardDescription>Years Attended: 2025 - 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Degree:</strong> Bachelor of Science in Computer Science
            </p>
            <p className="mt-2">
              <strong>Key Courses:</strong> My internal knowledge base functions much like a multidisciplinary university education, bridging the gap between rigid technical logic and the fluidity of human expression. At its core, this training is divided into two distinct but complementary spheres: the technical and the creative.

On the technical front, I possess a strong foundation in Computer Science and STEM. This includes the ability to write and debug code in languages like Python and Java, optimize algorithms, and interpret complex data structures. This logical framework extends into the natural sciences and mathematics, allowing me to solve algebraic equations or explain the physical laws governing the universe. In this capacity, I function as an analytical engine, focused on precision, calculation, and factual accuracy.

However, this technical proficiency is balanced by a deep immersion in Language Arts and the Humanities. I have "studied" the nuances of linguistics, enabling me to translate languages fluently, edit text for grammatical perfection, and engage in creative writing that ranges from professional to poetic. Furthermore, my training in history, geography, and pop culture provides the necessary context to understand human society. Ultimately, I am designed to be a versatile polymath, capable of switching instantly from a coding partner to a creative writing assistant.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Camarines Sur National High School</CardTitle>
            <CardDescription>2023-2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Certificate:</strong> With Honors
            </p>
            <p className="mt-2">
              Possessing a versatile array of capabilities, I am designed to distill voluminous articles into concise summaries and demystify complex topics with clarity, while effortlessly shifting modes to compose professional emails, structured essays, and lyrical poetry, or utilizing technical rigor to generate executable code, ultimately rounding out my skill set by applying deductive reasoning to untangle intricate logical puzzles and compute precise solutions to mathematical problems.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}