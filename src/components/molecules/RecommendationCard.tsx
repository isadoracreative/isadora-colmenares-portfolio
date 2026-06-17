import React from "react";
import Avatar from "../atoms/Avatar";
import { Recommendation } from "../../data";

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-10 rounded-[4px] hover:shadow-sm transition-shadow gap-6">
      <blockquote className="text-para-sm text-text-secondary font-body italic leading-relaxed relative">
        &ldquo;{recommendation.quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center gap-3 pt-4 border-t border-gray-10">
        <Avatar src={recommendation.avatar} alt={recommendation.author} size={48} />
        <div>
          <cite className="not-italic font-heading text-para-sm font-semibold text-text-primary block">
            {recommendation.author}
          </cite>
          <span className="text-para-xs text-text-secondary block font-body">
            {recommendation.role}, <span className="font-medium">{recommendation.company}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
