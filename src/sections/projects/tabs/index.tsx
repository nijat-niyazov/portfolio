import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CategoriesTabs() {
  return (
    <Tabs defaultValue="all" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="react">React</TabsTrigger>
        <TabsTrigger value="next">Next</TabsTrigger>
      </TabsList>

      <TabsContent value="all">All</TabsContent>
      <TabsContent value="react">react</TabsContent>
      <TabsContent value="next">next</TabsContent>
    </Tabs>
  );
}

export default CategoriesTabs;
