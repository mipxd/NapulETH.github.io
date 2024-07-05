import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";



const headers = {
	Authorization: "secret_KMU51fPKhtzCgyT6ahxX9sPtU03E17uFR9g4tjD2lOX",
	"Notion-Version" : "2022-06-28"
}
const page_id = "cade4eeb29fe4c1fb4e5f958ccacdc7f" 
const request_url = `https://api.notion.com/v1/databases/${page_id}`



export async function GET(request: NextRequest, response: NextResponse) {
	try {
		const response = await fetch(request_url, {
            headers: {
                Authorization: `Bearer secret_KMU51fPKhtzCgyT6ahxX9sPtU03E17uFR9g4tjD2lOX`,
                "Notion-Version": "2022-06-28",
              },
        })

        if(response) return NextResponse.json({ data: "hhahas" }, { status: 200 })
            else return NextResponse.json({ data: "no response" }, { status: 200 })
        
	} catch (error) {
		console.log(error)
		return NextResponse.json({ message: 'incorrect axios combine request nftfloor', error }, { status: 404 })
	}
}


