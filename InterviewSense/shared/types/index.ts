/**
 * Shared Type Definitions for InterviewSense Platform
 * Synchronized across Frontend and Backend
 */

export type EventType =
  // Client -> Server
  | 'AUDIO_CHUNK'
  | 'VISION_METRICS'
  | 'CODE_SUBMIT'
  | 'INTERVIEW_CONTROL'
  | 'SESSION_METADATA'
  // Server -> Client
  | 'TRANSCRIPT'
  | 'VISION_FEEDBACK'
  | 'CODE_RESULT'
  | 'AI_HINT'
  | 'AI_EVALUATION'
  | 'METRICS_SNAPSHOT'
  | 'SYSTEM_MESSAGE'
  | 'SESSION_RESTORED'
  | 'ERROR';

export interface WebSocketEventEnvelope<T = any> {
  type: EventType;
  sessionId: string;
  timestamp: number; // Unix ms
  sequenceNumber: number; // For ordering in async model
  payload: T;
}

// --------------------------------------------------------
// CLIENT -> SERVER EVENT PAYLOADS
// --------------------------------------------------------

export interface AudioChunkPayload {
  pcm_bytes: string; // Base64-encoded PCM buffer
  duration_ms: number; // Expected: 160ms
  encoding: 'pcm_float32_48khz' | 'pcm_int16_48khz';
  sequenceId: number; // For reordering
}

export interface GazeData {
  x: number; // Normalized 0-1 (left-right)
  y: number; // Normalized 0-1 (up-down)
  confidence: number; // 0-1
}

export interface HeadPoseData {
  pitch: number; // Degrees
  yaw: number; // Degrees
  roll: number; // Degrees
}

export interface BlinkData {
  is_blinking: boolean;
  blink_rate_per_minute: number; // Rolling 10s window
}

export interface VisionMetricsPayload {
  gaze: GazeData;
  head_pose: HeadPoseData;
  blink: BlinkData;
  landmarks_confidence: number; // Overall FaceLandmarker confidence
}

export interface CodeSubmitPayload {
  language: 'python' | 'javascript' | 'java' | 'cpp';
  source_code: string; // Full editor content
  execution_context: 'interactive' | 'test';
  file_name: string; // e.g. "solution.py"
}

export interface InterviewControlPayload {
  action: 'pause' | 'resume' | 'end' | 'request_hint';
  reason?: string;
}

export interface SessionMetadataPayload {
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  interview_domain: 'dsa' | 'system_design' | 'behavioral';
  resume_keywords?: string[];
  target_role?: string;
}

// --------------------------------------------------------
// SERVER -> CLIENT EVENT PAYLOADS
// --------------------------------------------------------

export interface TranscriptPayload {
  text: string;
  confidence: number; // 0-1
  is_final: boolean;
  start_time_ms: number;
  word_count: number;
  filler_words: string[];
  filler_count: number;
  wpm: number;
}

export interface VisionFeedbackPayload {
  gaze_stability: number; // 0-100
  attention_level: 'excellent' | 'good' | 'distracted' | 'disengaged';
  blink_rate_assessment: 'normal' | 'excessive' | 'low';
  head_position_assessment: 'neutral' | 'tilted' | 'away_from_camera';
  overall_engagement_score: number; // 0-100
}

export interface ASTIssue {
  line: number;
  severity: 'error' | 'warning' | 'info';
  message: string;
  suggestion?: string;
}

export interface ASTAnalysis {
  functions_defined: string[];
  time_complexity: string; // "O(1)", "O(n)", "O(n log n)", "O(n^2)", etc.
  space_complexity: string; // "O(1)", "O(n)", "O(log n)", etc.
  code_quality_score: number; // 0-100
  issues: ASTIssue[];
}

export interface CodeResultPayload {
  success: boolean;
  stdout: string;
  stderr: string;
  runtime_ms: number;
  memory_peak_mb: number;
  ast_analysis: ASTAnalysis;
  execution_id: string;
}

export interface AIHintPayload {
  hint_type: 'follow_up_question' | 'clarification' | 'edge_case' | 'optimization';
  text: string;
  code_snippet?: string;
  difficulty_delta: -1 | 0 | 1;
  reasoning: string;
  related_metrics: {
    detected_from_code?: string[];
    detected_from_speech?: string[];
    interaction_count: number;
  };
  hint_id: string;
}

export interface AIEvaluationPayload {
  evaluation_id: string;
  question_text: string;
  answer_text: string;
  evaluation: {
    correctness_score: number; // 0-100
    clarity_score: number; // 0-100
    completeness_score: number; // 0-100
    feedback: string;
    suggested_improvement?: string;
  };
}

export interface MetricsSnapshotPayload {
  timestamp: number;
  elapsed_time_ms: number;
  metrics: {
    communication: {
      wpm: number;
      clarity_score: number; // 0-100
      filler_word_count: number;
      pause_count: number;
    };
    code_quality: {
      complexity_score: number; // 0-100
      correctness_score: number; // 0-100
      style_score: number; // 0-100
      last_execution_success: boolean;
    };
    engagement: {
      gaze_stability: number; // 0-100
      attention_level: number; // 0-100
      interaction_depth: number; // 0-100
    };
  };
}

export interface SystemMessagePayload {
  level: 'info' | 'warning' | 'error';
  message: string;
  error_code?: string;
  recovery_action?: string;
}

export interface ErrorPayload {
  code:
    | 'AUDIO_STREAM_INTERRUPTED'
    | 'EXECUTION_TIMEOUT'
    | 'LLM_RATE_LIMIT'
    | 'DB_SYNC_FAILED'
    | 'SESSION_NOT_FOUND'
    | 'INVALID_PAYLOAD';
  message: string;
  retry_after_ms?: number;
  recoverable: boolean;
}

// --------------------------------------------------------
// DOMAIN MODELS & REPORT TYPES
// --------------------------------------------------------

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  profile_picture_url?: string;
  created_at: string;
}

export interface InterviewSession {
  id: string;
  user_id: string;
  title: string;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  interview_domain: 'dsa' | 'system_design' | 'behavioral';
  target_role?: string;
  status: 'ongoing' | 'paused' | 'completed';
  started_at: string;
  ended_at?: string;
  paused_at?: string;
  total_duration_ms?: number;
  word_count?: number;
  average_wpm?: number;
  engagement_score?: number;
  code_quality_score?: number;
  communication_score?: number;
}

export interface InterviewReport {
  id: string;
  session_id: string;
  overall_score: number;
  communication_score: number;
  technical_score: number;
  engagement_score: number;
  code_quality_score: number;
  total_duration_ms: number;
  communication_breakdown: {
    wpm: number;
    clarity: number;
    filler_count: number;
    pause_count: number;
  };
  technical_breakdown: {
    complexity: string;
    correctness_score: number;
    style_score: number;
    code_quality_score: number;
  };
  engagement_breakdown: {
    gaze_stability: number;
    attention_score: number;
    depth: number;
  };
  strengths: string[];
  areas_for_improvement: string[];
  detailed_feedback: string;
  generated_at: string;
}
