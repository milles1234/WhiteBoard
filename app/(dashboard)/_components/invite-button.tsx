import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { OrganizationProfile } from "@clerk/nextjs"
import { Plus } from "lucide-react"

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger render={
                <Button variant={"outline"}>
                    <Plus className="h-4 w-4 mr-2" />
                    Invite members

                </Button>

            } />


            <DialogContent>
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}