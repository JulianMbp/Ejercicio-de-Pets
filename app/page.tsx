'use client'

import { Card, CardBody, CardHeader, Button, Tabs, Tab, Navbar, NavbarBrand, Image } from "@nextui-org/react"
import { PawPrint, Dog, Cat, Users } from "lucide-react"

export default function Home() {
  const dogs = [
    {
      name: "Nacho",
      description: "A playful Golden Retriever who loves to chase tennis balls and give warm hugs.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=662&auto=format&fit=crop"
    },
    {
      name: "Samy",
      description: "A gentle German Shepherd with a heart of gold, excellent at protecting the family.",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=689&auto=format&fit=crop"
    },
    {
      name: "Luna",
      description: "An energetic Border Collie who excels at agility training and loves to learn new tricks.",
      image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=686&auto=format&fit=crop"
    },
    {
      name: "Maya",
      description: "A sweet Labrador Retriever who adores swimming and playing with children.",
      image: "https://images.unsplash.com/photo-1605897472359-85e4b94d685d?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Pompom",
      description: "A tiny Pomeranian with a big personality, always ready for cuddles.",
      image: "https://images.unsplash.com/photo-1637692058809-441e9e0dbc99?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Brownie",
      description: "A chocolate Lab with endless enthusiasm for fetch and belly rubs.",
      image: "https://images.unsplash.com/photo-1579213838753-9284a5fcd706?q=80&w=687&auto=format&fit=crop"
    }
  ]

  const cats = [
    {
      name: "Bruno",
      description: "A sophisticated Siamese cat who enjoys sunbathing and watching birds from the window.",
      image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=687&auto=format&fit=crop"
    }
  ]

  const caregivers = [
    {
      name: "Julian",
      role: "Senior Pet Caregiver",
      description: "Specialized in dog training and behavioral therapy. Has 5 years of experience working with various breeds.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Mafe",
      role: "Veterinary Assistant",
      description: "Expert in pet nutrition and preventive care. Passionate about helping pets live their healthiest lives.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=687&auto=format&fit=crop"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar>
        <NavbarBrand className="gap-2">
          <PawPrint className="h-6 w-6" />
          <p className="font-bold text-xl">PETS</p>
        </NavbarBrand>
      </Navbar>

      <div className="container mx-auto px-6 py-8">
        <Tabs 
          aria-label="Pet categories" 
          className="flex justify-center"
          color="primary"
          variant="underlined"
          size="lg"
        >
          <Tab
            key="dogs"
            title={
              <div className="flex items-center gap-2">
                <Dog className="h-4 w-4" />
                <span>Dogs</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {dogs.map((dog) => (
                <Card key={dog.name} className="max-w-md">
                  <CardHeader className="p-0">
                    <Image
                      src={dog.image}
                      alt={dog.name}
                      className="object-cover w-full h-48"
                      radius="none"
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className="text-xl font-bold">{dog.name}</h4>
                    <p className="text-gray-600">{dog.description}</p>
                    <Button color="primary" className="w-full mt-4">
                      Learn More
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
          <Tab
            key="cats"
            title={
              <div className="flex items-center gap-2">
                <Cat className="h-4 w-4" />
                <span>Cats</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {cats.map((cat) => (
                <Card key={cat.name} className="max-w-md">
                  <CardHeader className="p-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      className="object-cover w-full h-48"
                      radius="none"
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className="text-xl font-bold">{cat.name}</h4>
                    <p className="text-gray-600">{cat.description}</p>
                    <Button color="primary" className="w-full mt-4">
                      Learn More
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
          <Tab
            key="caregivers"
            title={
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Caregivers</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {caregivers.map((caregiver) => (
                <Card key={caregiver.name} className="max-w-md">
                  <CardHeader className="p-0">
                    <Image
                      src={caregiver.image}
                      alt={caregiver.name}
                      className="object-cover w-full h-48"
                      radius="none"
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className="text-xl font-bold">{caregiver.name}</h4>
                    <p className="text-primary font-medium">{caregiver.role}</p>
                    <p className="text-gray-600">{caregiver.description}</p>
                    <Button color="primary" className="w-full mt-4">
                      Contact
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </main>
  )
}