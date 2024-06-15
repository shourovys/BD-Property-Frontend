import SectionTitle from '@/components/common/SectionTitle'
import AgentCard from '@/components/pages/agents/AgentCard'
import { IAgent } from '@/types/pages/agent'
import { ISingleServerResponse } from '@/types/pages/common'
import fetchData from '@/utils/fetchData'
import type { NextPage } from 'next'
import { agentUrls } from '@/api/urls/AgentUrls'

const AllAgents: NextPage = async () => {
  const agentData = await fetchData<ISingleServerResponse<IAgent[]>>(
    agentUrls.contact,
  )

  return (
    <div className="bg-gray-100 py-10 font-ubuntu text-sm text-black md:text-base">
      <div className="custom_screen_width">
        <div className="flex items-center justify-between">
          <SectionTitle>All Agents</SectionTitle>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {agentData.results.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllAgents
