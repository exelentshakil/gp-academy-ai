/**
 * GP Academy - Commercial Wingfoil Coaching & AI Software Cockpit
 * Central Schema & Data Provider for Light-Speed Customization.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'gp-academy-ai',
  name: 'GP Academy',
  badge: 'Wingfoil Coaching & AI Platform',
  tagline: 'From Pro Athlete Technique to Global Digital Academy',
  description: 'Transforming professional wingfoil athletic expertise into an international digital business, subscription masterclasses, and an AI-powered flight telemetry and biomechanics product.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Academy Cockpit' },
    { id: 'pipeline', label: 'AI Flight Telemetry' },
    { id: 'records', label: 'Athlete Subscriptions' },
  ],
  metrics: [
    {
      id: 'mrr',
      title: 'Subscription ARR',
      value: '$148.5k',
      change: '+34.2% MoM',
      trend: 'up',
      subtext: '482 active international riders',
      badge: 'Stripe Active',
    },
    {
      id: 'athletes',
      title: 'Athletes Coached',
      value: '1,240 Riders',
      change: '+18.6% vs Q2',
      trend: 'up',
      subtext: 'Lake Garda, Sardinia & Tarifa clinics',
      badge: '94% Retention',
    },
    {
      id: 'ai-sessions',
      title: 'AI Flight & Stance Audits',
      value: '3,890 Runs',
      change: 'Sub-90ms Analysis',
      trend: 'up',
      subtext: 'Hydrofoil pitch, yaw & stance telemetry',
      badge: 'Biomechanics',
    },
    {
      id: 'conversion',
      title: 'Funnel Conversion',
      value: '4.8% CR',
      change: '+2.1x vs Baseline',
      trend: 'up',
      subtext: 'Landing page to masterclass checkout',
      badge: 'Funnel 2.1x',
    },
  ],
  workflow: {
    badge: 'Step 1 • AI Flight Telemetry & Coaching Synthesis',
    title: 'AI Wingfoil Technique & Video Telemetry Analyzer',
    description: 'Test real-time AI analysis of rider stance, wing angle of attack, foil mast pitch, wind knots, and corrective coaching drills from the GP Academy playbook.',
    inputLabel: 'Rider Session Telemetry or Coaching Log',
    inputPlaceholder: 'Paste rider wingfoil session notes, wind conditions, foil setup, or technique flaw...',
    defaultInput: 'Rider Marco V. (Intermediate, 78kg) riding 4.5m wing in 18kt chop at Lake Garda. Front foil 950cm², 85cm mast. Issue: Breaching the surface on downwind gybes and front-foot fatigue after 20 mins of flight.',
    buttonLabel: 'Analyze Flight Biomechanics',
    sampleResponse: {
      status: 'ANALYZED_AND_CORRECTED',
      rider: 'Marco V.',
      discipline: 'Wingfoil Freeride & Downwind Gybe',
      wind_conditions: '18 knots, moderate chop (Lake Garda)',
      equipment_audit: {
        wing_size: '4.5m (Optimal for 18kt / 78kg)',
        foil_mast: '85cm carbon',
        front_wing_area: '950cm² high-aspect',
        mast_track_recommendation: 'Shift 1.5cm forward on board track to balance pitch stability',
      },
      biomechanics_diagnosis: {
        root_cause: 'Center of mass placed too far aft during downwind roll initiation; late wing depower causing sudden foil lift and surface breach',
        foil_pitch_stability: '71.4% (Critical instability in carve apex)',
        stance_correction: 'Lower hips 15 degrees, engage quad core, transfer 60% weight to front foot 0.5s prior to foil breach',
      },
      prescribed_academy_module: 'GP Academy Module 4: Downwind Gybe Mastery & Foil Pressure Balancing',
      membership_path: 'Pro Digital Academy ($49/mo) with weekly video breakdown',
      provider_telemetry: {
        engine: 'OpenAI gpt-4o-mini',
        fallback: 'Google Gemini 2.0 Flash',
        latency_ms: 78,
        deterministic_math_isolated: true,
      },
    },
  },
  table: {
    badge: 'Global Member & Clinic Roster',
    title: 'Active Athlete Subscriptions & Clinic Enrollments',
    description: 'Live subscriber registry with Stripe subscription tiers, digital course access, and 1-tap coaching inspection.',
    columns: [
      { key: 'id', label: 'Athlete ID' },
      { key: 'entityName', label: 'Rider / Athlete' },
      { key: 'category', label: 'Subscription Tier' },
      { key: 'status', label: 'Membership Status' },
      { key: 'latency', label: 'AI Response' },
      { key: 'action', label: 'Coaching Card' },
    ],
    rows: [
      {
        id: 'ATH-8841',
        entityName: 'Matteo Rossi (Milan, IT)',
        category: 'Pro Athlete Membership',
        status: 'verified',
        latency: '74ms',
        provider: 'OpenAI gpt-4o-mini',
        updatedAt: '2 mins ago',
        payload: {
          rider_id: 'GP-MATTEO-8841',
          tier: 'Pro Athlete ($89/mo)',
          home_spot: 'Lake Garda (Malcesine)',
          skill_level: 'Advanced',
          foil_gear: 'Sabfoil W945 / 82cm Carbon',
          latest_session: 'Downwind 360 & Racing Tacks',
          ai_coaching_notes: 'Mast pitch variance reduced to 4.2deg. Ready for national racing circuit.',
          stripe_customer_id: 'cus_gp_9824_active',
        },
      },
      {
        id: 'ATH-8840',
        entityName: 'Sophie Laurent (Biarritz, FR)',
        category: 'Digital Masterclass Pass',
        status: 'active',
        latency: '62ms',
        provider: 'OpenAI gpt-4o-mini',
        updatedAt: '5 mins ago',
        payload: {
          rider_id: 'GP-SOPHIE-8840',
          tier: 'Digital Masterclass ($49/mo)',
          home_spot: 'Biarritz (Plage de la Côte des Basques)',
          skill_level: 'Intermediate',
          foil_gear: 'F-One Phantom 980 / 85cm',
          latest_session: 'Wave Riding & Swell Gliding',
          ai_coaching_notes: 'Weight transfer on swell link-up verified; wing flag-out technique improved 35%.',
          stripe_customer_id: 'cus_gp_9823_active',
        },
      },
      {
        id: 'ATH-8839',
        entityName: 'Lukas Weber (Munich, DE)',
        category: 'Beginner to Flight',
        status: 'verified',
        latency: '88ms',
        provider: 'Gemini 2.0 Flash',
        updatedAt: '11 mins ago',
        payload: {
          rider_id: 'GP-LUKAS-8839',
          tier: 'Beginner Kickstart ($199 One-Time)',
          home_spot: 'Lake Starnberg / Lake Garda',
          skill_level: 'Novice (First Flight)',
          foil_gear: 'Duotone Aero Free 1250',
          latest_session: 'Taxiing & Pumping First Takeoffs',
          ai_coaching_notes: 'Eliminated rear-foot stall. Sustained 300m flight achieved.',
          stripe_customer_id: 'cus_gp_9822_active',
        },
      },
      {
        id: 'ATH-8838',
        entityName: 'Elena Moretti (Rome, IT)',
        category: 'Sardinia Pro Clinic 2026',
        status: 'queued',
        latency: '38ms',
        provider: 'Deterministic Core',
        updatedAt: '18 mins ago',
        payload: {
          rider_id: 'GP-ELENA-8838',
          tier: 'In-Person Immersion Clinic (€1,250)',
          home_spot: 'Porto Pollo (Sardinia)',
          skill_level: 'Advanced',
          foil_gear: 'Armstrong MA800 / 85cm Performance',
          latest_session: 'High-Wind Speed & Jump Telemetry',
          ai_coaching_notes: 'Clinic deposit confirmed. Video baseline recorded for arrival briefing.',
          stripe_customer_id: 'cus_gp_9821_active',
        },
      },
      {
        id: 'ATH-8837',
        entityName: 'Alex Jenkins (Hood River, US)',
        category: 'Pro Telemetry Beta',
        status: 'verified',
        latency: '91ms',
        provider: 'OpenAI gpt-4o-mini',
        updatedAt: '24 mins ago',
        payload: {
          rider_id: 'GP-ALEX-8837',
          tier: 'Telemetry Sensor Beta ($129/mo)',
          home_spot: 'Columbia River Gorge, Oregon',
          skill_level: 'Expert',
          foil_gear: 'Axis Spitfire 780 / 90cm Carbon',
          latest_session: 'Gorge Swell Ride - 29.2 kt Max Speed',
          ai_coaching_notes: 'Cavitation limit reached at 29kt. Recommending shim -0.5deg on stabilizer.',
          stripe_customer_id: 'cus_gp_9820_active',
        },
      },
    ],
  },
};
