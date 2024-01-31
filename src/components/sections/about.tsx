import { Separator } from "../ui/separator";

function About() {
  return (
    <section className="flex flex-col bg-accent place-items-center">
      <div className="p-12 m-5 text-center">
        <h1 className="font-bold text-[30px]">העמותה</h1>
        <p className="leading-tight max-w-[620px]">
          עמותת רפאים הוקמה ב2023- על מנת לקיים בית חם לבוגרי היחידה, לקיים
          קהילה מקדמת ופעילה למען החברה הישראלית, לחזק את מורשת היחידה, לסייע
          לחבריה בהכוונה לקבלת טיפול לנפגעי הנפש ולהנציח את נופליה.
        </p>
      </div>
      <Separator />
    </section>
  );
}

export default About;
