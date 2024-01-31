import { Gift, GraduationCap, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function Values() {
  return (
    <section className="flex flex-col bg-accent">
      <div className="flex-1 flex flex-row justify-center place-items-center p-5 m-5 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>
              <Heart size={"64px"} color="#15803d" />
            </CardTitle>
            <CardDescription>ליווי נפגעים</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <GraduationCap size={"64px"} color="#15803d" />
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Gift size={"64px"} color="#15803d" />
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="flex-1 flex flex-row justify-center place-items-center p-5 m-5 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>
              <Heart size={"64px"} color="#15803d" />
            </CardTitle>
            <CardDescription>ליווי נפגעים</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <GraduationCap size={"64px"} color="#15803d" />
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Gift size={"64px"} color="#15803d" />
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default Values;
