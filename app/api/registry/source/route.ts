import { NextRequest, NextResponse } from "next/server"

import { getRegistryItemContent } from "@/lib/registry-server"

/**
 * API route to get source code from registry items
 * Following official shadcn/ui pattern
 * GET /api/registry/source?name=button-demo
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get("name")

    if (!name) {
      return NextResponse.json(
        { error: "Missing name parameter" },
        { status: 400 }
      )
    }

    const result = await getRegistryItemContent(name)

    if (!result) {
      return NextResponse.json(
        { error: "Registry item not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      name,
      content: result.content,
      item: result.item,
    })
  } catch {
    // Registry API errors disabled for production

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
