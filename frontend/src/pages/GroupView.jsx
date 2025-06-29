import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Play, Volume2, Gamepad2, SpellCheck } from "lucide-react";
import { getGroupById, playAudio } from "../data/phonicsData";
import { useParams, useNavigate } from "react-router-dom";

const GroupView = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const group = getGroupById(groupId);

  if (!group) {
    return <div className="p-4 text-center text-red-500">Group not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Button onClick={() => navigate(-1)} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">{group.name}</CardTitle>
          <CardDescription className="text-center">Explore the sounds and games for this phonics group.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {group.letters.map((letter, index) => (
              <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-gray-50">
                <h3 className="text-6xl font-extrabold text-blue-600 mb-4">{letter.toUpperCase()}</h3>
                <Button
                  onClick={() => playAudio(letter)}
                  className="w-full py-3 text-lg bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center"
                >
                  <Volume2 className="mr-2 h-6 w-6" /> Play / {letter.toLowerCase()} /
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => navigate(`/matching-game/${groupId}`)}
              className="w-full py-4 text-xl bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center"
            >
              <Gamepad2 className="mr-2 h-6 w-6" /> Matching Game
            </Button>
            <Button
              onClick={() => navigate(`/spelling-game/${groupId}`)}
              className="w-full py-4 text-xl bg-orange-600 hover:bg-orange-700 text-white rounded-lg flex items-center justify-center"
            >
              <SpellCheck className="mr-2 h-6 w-6" /> Spelling Game
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GroupView;


