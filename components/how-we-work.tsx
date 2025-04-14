import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Tabs_Work = () => {
    return(
        <Tabs defaultValue="account" className="w-10/12 mx-auto bg-orange-100 px-16 py-10 rounded-3xl">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="smart-tech">Smart Tech</TabsTrigger>
                <TabsTrigger value="built-in-intelligence">Built-In Intelligence</TabsTrigger>
                <TabsTrigger value="global-impact">Global impact</TabsTrigger>
            </TabsList>
            <TabsContent value="smart-tech">
                <div className="py-10">
                    <h2 className="heading text-[40px]">Smart Lens Technology</h2>
                    <p className="max-w-2xl">We use liquid crystal or fluid-based materials that change shape and focus in real-time—just like your eye lens. This forms the core of our adaptive design.</p>
                </div>
            </TabsContent>
            <TabsContent value="built-in-intelligence">
            <div className="py-10">
                    <h2 className="heading text-[40px]">Smart Lens Technology</h2>
                    <p className="max-w-2xl">We use liquid crystal or fluid-based materials that change shape and focus in real-time—just like your eye lens. This forms the core of our adaptive design.</p>
                </div>
            </TabsContent>
            <TabsContent value="global-impact">
            <div className="py-10">
                    <h2 className="heading text-[40px]">Smart Lens Technology</h2>
                    <p className="max-w-2xl">We use liquid crystal or fluid-based materials that change shape and focus in real-time—just like your eye lens. This forms the core of our adaptive design.</p>
                </div>
            </TabsContent>
        </Tabs>

    )
}

export default Tabs_Work

